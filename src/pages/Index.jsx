import { Container, Text, VStack, HStack, Button, Box, Image, Link } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <HStack justifyContent="space-between" py={4}>
        <HStack spacing={8}>
          <Image src="/logo.png" alt="TaxPal Logo" boxSize="40px" />
          <HStack spacing={8} as="nav">
            <Link href="#features" fontSize="lg">Features</Link>
            <Link href="#testimonials" fontSize="lg">Testimonials</Link>
            <Link href="#pricing" fontSize="lg">Pricing</Link>
          </HStack>
        </HStack>
        <HStack spacing={4}>
          <Button variant="link" fontSize="lg">Sign in</Button>
          <Button colorScheme="blue" size="lg">Get started today</Button>
        </HStack>
      </HStack>

      {/* Main Content */}
      <VStack spacing={6} textAlign="center" py={20}>
        <Text fontSize="5xl" fontWeight="bold">
          Accounting <Text as="span" color="blue.500">made simple</Text> for small businesses.
        </Text>
        <Text fontSize="xl" color="gray.600">
          Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.
        </Text>
        <HStack spacing={4}>
          <Button colorScheme="blue" size="lg">Get 6 months free</Button>
          <Button variant="outline" size="lg" leftIcon={<FaPlay />}>Watch video</Button>
        </HStack>
      </VStack>

      {/* Trusted Companies */}
      <VStack spacing={4} py={10}>
        <Text fontSize="lg" color="gray.500">Trusted by these six companies so far</Text>
        <HStack spacing={8}>
          <Image src="/logos/transistor.png" alt="Transistor Logo" boxSize="100px" />
          <Image src="/logos/tuple.png" alt="Tuple Logo" boxSize="100px" />
          <Image src="/logos/statickit.png" alt="StaticKit Logo" boxSize="100px" />
          <Image src="/logos/mirage.png" alt="Mirage Logo" boxSize="100px" />
          <Image src="/logos/laravel.png" alt="Laravel Logo" boxSize="100px" />
          <Image src="/logos/statamic.png" alt="Statamic Logo" boxSize="100px" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;