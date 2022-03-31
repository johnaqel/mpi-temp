import {
    Button,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter, ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {FormHost} from "../utils/FormHost";

export const CommandButton = ({title, form}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const submitSuccess = () => {
        onClose()
    }

    const cancel = () => {
        onClose()
    }

    return (
        <>
            <Button onClick={onOpen}>{title}</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormHost onSubmitSuccess={submitSuccess} onCancel={cancel}>
                            {form}
                        </FormHost>

                    </ModalBody>

                    {/*<ModalFooter>*/}
                    {/*    <Button colorScheme='blue' mr={3} onClick={onClose}>*/}
                    {/*        Close*/}
                    {/*    </Button>*/}
                    {/*    <Button variant='ghost'>Secondary Action</Button>*/}
                    {/*</ModalFooter>*/}
                </ModalContent>
            </Modal>
        </>
    );
}