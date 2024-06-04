import { Container, Text, VStack, HStack, Button, Box, Image, Link } from "@chakra-ui/react";
import { FaPlay, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="brand.900" color="text.dark">
      {/* Navigation Bar */}
      <HStack justifyContent="space-between" py={4} borderBottom="2px solid" borderColor="text.dark">
        <HStack spacing={8}>
          <Image src="/logo.png" alt="TaxPal Logo" boxSize="40px" />
          <HStack spacing={8} as="nav">
            <Link href="#features" fontSize="lg" color="text.dark">Features</Link>
            <Link href="#testimonials" fontSize="lg" color="text.dark">Testimonials</Link>
            <Link href="#pricing" fontSize="lg" color="text.dark">Pricing</Link>
          </HStack>
        </HStack>
        <HStack spacing={4}>
          <Button variant="link" fontSize="lg" color="text.dark">Sign in</Button>
          <Button colorScheme="brand" size="lg" bg="brand.700" color="text.dark">Get started today</Button>
        </HStack>
      </HStack>

      {/* Main Content */}
      <VStack spacing={6} textAlign="center" py={20}>
        <Text fontSize="5xl" fontWeight="bold">
          Accounting <Text as="span" color="brand.800">made simple</Text> for small businesses.
        </Text>
        <Text fontSize="xl" color="text.muted">
          Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.
        </Text>
        <HStack spacing={4}>
          <Button colorScheme="brand" size="lg" bg="brand.700" color="text.dark">Get 6 months free</Button>
          <Button variant="outline" size="lg" leftIcon={<FaPlay />} color="text.dark" borderColor="text.dark">Watch video</Button>
        </HStack>
      </VStack>

      {/* Trusted Companies */}
      <VStack spacing={4} py={10}>
        <Text fontSize="lg" color="text.muted">Trusted by these six companies so far</Text>
        <HStack spacing={8}>
          <Image src="/logos/transistor.png" alt="Transistor Logo" boxSize="100px" />
          <Image src="/logos/tuple.png" alt="Tuple Logo" boxSize="100px" />
          <Image src="/logos/statickit.png" alt="StaticKit Logo" boxSize="100px" />
          <Image src="/logos/mirage.png" alt="Mirage Logo" boxSize="100px" />
          <Image src="/logos/laravel.png" alt="Laravel Logo" boxSize="100px" />
          <Image src="/logos/statamic.png" alt="Statamic Logo" boxSize="100px" />
        </HStack>
      </VStack>

      {/* New Section with Headline, Subheadline, and Image */}
      <HStack spacing={8} py={20} alignItems="center" className="new-section-hstack" border="2px solid" borderColor="text.dark">
        <VStack align="start" spacing={4} className="new-section-vstack">
          <Text fontSize="4xl" fontWeight="bold">Streamline Your Workflow</Text>
          <Text fontSize="xl" color="text.muted">Our tools help you manage your business efficiently and effectively.</Text>
        </VStack>
        <Image src="/images/workflow.png" alt="Workflow Image" boxSize="400px" />
      </HStack>

      {/* New Section with Three Columns */}
      <VStack spacing={8} py={20} alignItems="center" border="2px solid" borderColor="text.dark">
        <Text fontSize="4xl" fontWeight="bold">Our Features</Text>
        <HStack spacing={8}>
          <VStack align="center" spacing={4}>
            <FaCheckCircle size="40px" color="brand.800" />
            <Text fontSize="2xl" fontWeight="bold">Feature One</Text>
            <Text fontSize="lg" color="text.muted">Description of feature one.</Text>
          </VStack>
          <VStack align="center" spacing={4}>
            <FaCheckCircle size="40px" color="brand.800" />
            <Text fontSize="2xl" fontWeight="bold">Feature Two</Text>
            <Text fontSize="lg" color="text.muted">Description of feature two.</Text>
          </VStack>
          <VStack align="center" spacing={4}>
            <FaCheckCircle size="40px" color="brand.800" />
            <Text fontSize="2xl" fontWeight="bold">Feature Three</Text>
            <Text fontSize="lg" color="text.muted">Description of feature three.</Text>
          </VStack>
        </HStack>
      </VStack>

      {/* New Testimonial Section */}
      <VStack spacing={8} py={20} alignItems="center" border="2px solid" borderColor="text.dark">
        <Text fontSize="4xl" fontWeight="bold">What Our Clients Say</Text>
        <VStack align="center" spacing={4} maxW="600px" textAlign="center">
          <FaQuoteLeft size="40px" color="brand.800" />
          <Text fontSize="xl" color="text.muted">"This product has transformed the way we do business. It's user-friendly and incredibly efficient."</Text>
          <Image src="/images/client.jpg" alt="Client Image" boxSize="100px" borderRadius="full" />
          <Text fontSize="lg" fontWeight="bold">John Doe</Text>
          <Text fontSize="md" color="text.muted">CEO, CompanyName</Text>
        </VStack>
      </VStack>

      {/* Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .new-section-hstack {
            flex-direction: column;
            align-items: center;
          }
          .new-section-hstack img {
            margin-top: 20px;
          }
          .new-section-vstack {
            text-align: center;
          }
        }
      `}</style>
    </Container>
  );
};

export default Index;