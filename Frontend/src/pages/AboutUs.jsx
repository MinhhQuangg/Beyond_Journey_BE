import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";

export const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to <strong>[Your Travel Guide Name]</strong>, your ultimate
          companion for exploring the world!
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>[Your Travel Guide Name]</strong> was born out of a love for
          travel and the belief that everyone deserves extraordinary adventures.
          What started as a personal passion for uncovering hidden gems has
          grown into a trusted platform where fellow wanderers come to find
          inspiration and advice.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          What We Offer
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Destination Guides"
              secondary="In-depth insights into the must-see spots, local flavors, and cultural highlights of every destination."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Travel Tips & Resources"
              secondary="From packing hacks to budgeting advice, we’ve got you covered."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Curated Itineraries"
              secondary="Tailored recommendations to help you maximize your time and experiences."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Authentic Stories"
              secondary="Real-world experiences shared by our team and community of travelers."
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Philosophy
        </Typography>
        <Typography variant="body1" paragraph>
          We believe in sustainable and responsible travel, ensuring that every
          journey not only enriches the traveler but also respects the cultures,
          environments, and communities we visit. We’re here to promote
          connections, celebrate diversity, and foster a sense of wonder for the
          world around us.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Join Us on the Journey
        </Typography>
        <Typography variant="body1" paragraph>
          At <strong>[Your Travel Guide Name]</strong>, we don’t just guide your
          travels; we travel with you. Whether you're an experienced explorer or
          taking your first step out of your comfort zone, we’re here to
          inspire, support, and celebrate your adventures every step of the way.
        </Typography>
        <Typography variant="body1" paragraph>
          <em>Let’s make every trip extraordinary.</em>
        </Typography>
        <Typography variant="body1">
          <strong>Happy travels,</strong>
        </Typography>
        <Typography variant="body1">
          The [Your Travel Guide Name] Team
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
