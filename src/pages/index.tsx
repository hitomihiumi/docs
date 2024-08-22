import { Container } from "@/components/layout/Container";
import Hero from "@/components/homepage/Hero";
import { HeadingMeta } from "@/components/heading";

export default function Main() {
  return (
    <Container>
      <HeadingMeta />
      <Hero />
    </Container>
  );
}
