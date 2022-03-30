import {Input, NumberInput, NumberInputField} from "@chakra-ui/react";
import {useForm} from "react-hook-form";

export const RegisterCookTempForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Cooked Item" {...register("item", { required: true })}/>
                {errors.item && <span>This field is required.</span>}
                <NumberInput defaultValue={0} precision={1} {...register("cookTemp", { required: true })}>
                    <NumberInputField />
                </NumberInput>
                blah
                {errors.cookTemp && <span>This field is required.</span>}
                <input type="submit" />
            </form>
        </>
    )
};