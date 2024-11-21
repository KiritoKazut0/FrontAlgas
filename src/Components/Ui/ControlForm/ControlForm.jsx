
import { FormControl, FormLabel, Input } from "@mui/joy";

export default function ControlForm({ name, type, placeholder }) {
    return (
        <>
            <FormControl sx={{ mt: 1, mb: 2}} size="md" >
                <FormLabel> {name} </FormLabel>
                <Input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                />
            </FormControl>
        </>
    );
}