import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {fetchRecipesInput} from '../../api/requests/RecipesList';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import Autocomplete from '@mui/material/Autocomplete';


export default function SearchInputComponent() {
    const [recipes, setRecipes] = useState([]);
    const [value, setValue] = React.useState(null);

    useEffect(() => {
        const res = fetchRecipesInput();
        res.then((data) => setRecipes(data.results));
    }, []);

    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        setValue({
                            name: newValue,
                        });
                    } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setValue({
                            name: newValue.inputValue,
                        });
                    } else {
                        setValue(newValue);
                    }
                }}

                getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    // Regular option
                    return option.name;
                }}

                id="free-solo-demo"
                freeSolo
                options={recipes}
                renderInput={(params) => <TextField {...params} label="Search Recipe"/>}

                renderOption={(props, option) => <li {...props}><Link to={`/recipe/${option.id}`}>{option.name}</Link>
                </li>}
            />
        </Stack>
    );
}
