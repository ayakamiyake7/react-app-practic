import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { memo, VFC } from "react";
import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>User Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value={user?.username} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value={user?.name} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>EMail</FormLabel>
                <Input value={user?.email} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TELL</FormLabel>
                <Input value={user?.phone} isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
