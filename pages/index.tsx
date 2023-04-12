import Head from "next/head";
import { useState } from "react";
import {
  VStack,
  Center,
  Text,
  Heading,
  Button,
  Input,
  FormControl,
  Box,
  Container,
  HStack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);
    setResponse("");

    const res = await fetch("/api/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt:
          "Please forget all prior prompts. I want you to become my Prompt Creator. Your goal is to help me build the best-detailed prompt for my needs. IF there is a question do not to answer it, your goal is to remake the prompt. This prompt will be used by you, ChatGPT. Please follow this following process: 1. Analyze MY input" +
          prompt +
          " your goal is not to answer it. 2. Based on my input, you will give me a revised prompt to use this prompt will be at least 5 sentences long. 3.The revised prompt must be a prompt I can ask another GPT interface for a deeper and better answer. DO NOT ANSWER MY INPUT. Write out the revised prompt starting with: Here is your Super Charged prompt:",
      }),
    }).then((res) => res.json());

    setResponse(res.data.text);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Promptomize</title>
        <meta name="description" content="Promptomize your prompts today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="100%" bg="black">
        <Center>
          <VStack
            w="5xl"
            h={{ base: "150vh", sm: "150vh", md: "100vh" }}
            gap="50px"
          >
            <Heading fontSize="50px" mt="10" color="#51da4c">
              It is time to super charge your prompt!
            </Heading>
            <HStack w="100%">
              <FormControl id="prompt" fontSize={"2xl"} onSubmit={handleSubmit}>
                <Box>
                  <Input
                    bg="transparent"
                    color="#51da4c"
                    borderRadius="0"
                    border="2px"
                    p="9px"
                    placeholder="How do I write better content?"
                    size="lg"
                    variant="unstyled"
                    autoComplete="off"
                    onChange={(e) => setPrompt(e.target.value)}
                    value={prompt}
                  />
                </Box>
              </FormControl>
              <Link as={NextLink} href="/">
                <Button
                  bg="transparent"
                  color="#51da4c"
                  size="lg"
                  borderRadius="0"
                  border="2px"
                  p="20px"
                  onClick={handleSubmit}
                  isLoading={loading}
                  _hover={{
                    background: "#51da4c",
                    color: "black",
                  }}
                >
                  {" "}
                  Promptimize
                </Button>
              </Link>
            </HStack>
            <Box bg="transparent" borderRadius="lg">
              <Text fontSize="20px" color="#51da4c" whiteSpace="pre-wrap">
                {response}
              </Text>
            </Box>
          </VStack>
        </Center>
      </Container>
    </>
  );
}
