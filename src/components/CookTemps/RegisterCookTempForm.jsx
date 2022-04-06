import {Button, Input, NumberInput, NumberInputField} from "@chakra-ui/react";
import {useForm, Controller} from "react-hook-form";
import {useFormHost} from "../../utils/FormHost";
import axios from "axios";
import {useMutation, useQueryClient} from "react-query";


export const RegisterCookTempForm = () => {

    const { control, register, handleSubmit, watch, formState: { errors } } = useForm();

    const [submitSuccess, cancel] = useFormHost();

    const queryClient = useQueryClient()
    const mutation = useMutation(newTodo => {
        return axios.post('/cook-temp', newTodo)
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries('cookTemp')
        }
    });

    const onSubmit = data => {
        console.log(data);
        mutation.mutate(data)

        submitSuccess();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Cooked Item" {...register("item", { required: true })}/>
                {errors.item && <span>This field is required.</span>}

                <Controller
                    control={control}
                    name="temperature"
                    rules={{ required: true }}
                    render={({ field: { ref, ...restField } }) => (
                        <NumberInput defaultValue={0} precision={1} {...restField}>
                            <NumberInputField ref={ref} name={restField.name} />
                        </NumberInput>
                    )}
                />
                {/*<NumberInput defaultValue={0} precision={1} {...register("temperature", { required: true })}>*/}
                {/*    <NumberInputField />*/}
                {/*</NumberInput>*/}
                {errors.cookTemp && <span>This field is required.</span>}
                <Button type="submit" >Submit</Button>
            </form>
        </>
    )
};