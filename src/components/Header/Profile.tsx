import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center" >
            {
                showProfileData &&
                
                <Box mr="4" textAlign="right" >
                    <Text>André Aragão</Text>
                    <Text color="gray.300" fontSize="small" >
                        andrearagaocontato@gmail.com
                    </Text>
                </Box>
            }
            <Avatar size="md" name="André Aragão" src="https://www.github.com/andrechism.png" />

        </Flex>

    )
}