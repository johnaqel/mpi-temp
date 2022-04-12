import {Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useQuery} from "react-query";
import axios from "axios";
import {CommandButton} from "../CommandButton";
import {RegisterCookTempForm} from "./RegisterCookTempForm";

export const CookTemps = () => {

    const query = useQuery('cookTemp', ()=>{ return axios.get('/cook-temp').then(res=>res.data)});
    return (
        <>
            <h2>Cook Temps</h2>
            <CommandButton title="Record Cook Temperature" form={<RegisterCookTempForm/>}/>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Time</Th>
                        <Th>Cooked Item</Th>
                        <Th isNumeric>Temperature</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {query.isSuccess && query.data.data.map(cookTemp=>
                        <Tr key={cookTemp.id}>
                            <Td>{cookTemp.timestamp}</Td>
                            <Td>{cookTemp.item}</Td>
                            <Td isNumeric>{cookTemp.temperature}</Td>
                        </Tr>)}
                </Tbody>
            </Table>
        </>
    )
}