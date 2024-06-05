import { useState } from "react";
import { Container, Box, VStack, HStack, Text, Button, IconButton, Image, Input, FormControl, FormLabel, Select, Textarea, Badge, Avatar, Tabs, TabList, TabPanels, Tab, TabPanel, Table, Thead, Tbody, Tr, Th, Td, Tfoot, Tooltip, useToast } from "@chakra-ui/react";
import { FaRocket, FaUser, FaBox, FaChartLine, FaPlane, FaMoneyBill, FaQuestionCircle, FaEnvelope, FaClipboardList, FaUsers, FaTicketAlt, FaMapMarkerAlt, FaBell } from "react-icons/fa";

const Index = () => {
  const [role, setRole] = useState("passenger");
  const toast = useToast();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleAcceptDelivery = () => {
    toast({
      title: "Delivery Accepted",
      description: "You have accepted the delivery request.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <HStack justifyContent="space-between" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          DelivAir
        </Text>
        <Select width="200px" value={role} onChange={handleRoleChange}>
          <option value="passenger">Passenger</option>
          <option value="sender">Sender</option>
          <option value="admin">Administrator</option>
          <option value="support">Support Staff</option>
        </Select>
      </HStack>

      {role === "passenger" && (
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Dashboard</Tab>
            <Tab>Available Deliveries</Tab>
            <Tab>My Deliveries</Tab>
            <Tab>Profile</Tab>
            <Tab>Support</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Passenger Dashboard
                </Text>
                <HStack spacing={4}>
                  <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                    <Text fontSize="lg" fontWeight="bold">
                      Earnings
                    </Text>
                    <Text>$1200</Text>
                  </Box>
                  <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                    <Text fontSize="lg" fontWeight="bold">
                      Current Flights
                    </Text>
                    <Text>3</Text>
                  </Box>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Available Deliveries
                </Text>
                <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                  <HStack justifyContent="space-between">
                    <Text>Package 1</Text>
                    <Button colorScheme="teal" onClick={handleAcceptDelivery}>
                      Accept
                    </Button>
                  </HStack>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  My Deliveries
                </Text>
                <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                  <HStack justifyContent="space-between">
                    <Text>Delivery 1</Text>
                    <Badge colorScheme="green">Delivered</Badge>
                  </HStack>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Profile
                </Text>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="John Doe" />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="john.doe@example.com" />
                </FormControl>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Support
                </Text>
                <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                  <Text>FAQs</Text>
                </Box>
                <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                  <Text>Contact Form</Text>
                  <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Your message" />
                  </FormControl>
                  <Button mt={2} colorScheme="teal">
                    Submit
                  </Button>
                </Box>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}

      {role === "sender" && (
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Dashboard</Tab>
            <Tab>Create Shipment</Tab>
            <Tab>Track Shipments</Tab>
            <Tab>Profile</Tab>
            <Tab>Support</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Sender Dashboard
                </Text>
                <HStack spacing={4}>
                  <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                    <Text fontSize="lg" fontWeight="bold">
                      Active Shipments
                    </Text>
                    <Text>5</Text>
                  </Box>
                  <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                    <Text fontSize="lg" fontWeight="bold">
                      Pending Deliveries
                    </Text>
                    <Text>2</Text>
                  </Box>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Create Shipment
                </Text>
                <FormControl>
                  <FormLabel>Pickup Location</FormLabel>
                  <Input placeholder="123 Main St" />
                </FormControl>
                <FormControl>
                  <FormLabel>Delivery Location</FormLabel>
                  <Input placeholder="456 Elm St" />
                </FormControl>
                <FormControl>
                  <FormLabel>Package Size</FormLabel>
                  <Select placeholder="Select size">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Package Weight</FormLabel>
                  <Input placeholder="Weight in kg" />
                </FormControl>
                <FormControl>
                  <FormLabel>Photos</FormLabel>
                  <Input type="file" />
                </FormControl>
                <Button mt={2} colorScheme="teal">
                  Create
                </Button>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Track Shipments
                </Text>
                <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                  <HStack justifyContent="space-between">
                    <Text>Shipment 1</Text>
                    <Badge colorScheme="yellow">In Transit</Badge>
                  </HStack>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Profile
                </Text>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Jane Doe" />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="jane.doe@example.com" />
                </FormControl>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Support
                </Text>
                <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                  <Text>FAQs</Text>
                </Box>
                <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                  <Text>Contact Form</Text>
                  <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Your message" />
                  </FormControl>
                  <Button mt={2} colorScheme="teal">
                    Submit
                  </Button>
                </Box>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}

      {role === "admin" && (
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Admin Dashboard</Tab>
            <Tab>User Management</Tab>
            <Tab>Shipment Management</Tab>
            <Tab>Financial Management</Tab>
            <Tab>Support Tickets</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Admin Dashboard
                </Text>
                <HStack spacing={4}>
                  <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                    <Text fontSize="lg" fontWeight="bold">
                      Active Users
                    </Text>
                    <Text>150</Text>
                  </Box>
                  <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                    <Text fontSize="lg" fontWeight="bold">
                      Total Shipments
                    </Text>
                    <Text>300</Text>
                  </Box>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  User Management
                </Text>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>User</Th>
                      <Th>Email</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>John Doe</Td>
                      <Td>john.doe@example.com</Td>
                      <Td>
                        <Badge colorScheme="green">Active</Badge>
                      </Td>
                      <Td>
                        <Button size="sm" colorScheme="red">
                          Deactivate
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Shipment Management
                </Text>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Shipment</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Shipment 1</Td>
                      <Td>
                        <Badge colorScheme="yellow">In Transit</Badge>
                      </Td>
                      <Td>
                        <Button size="sm" colorScheme="blue">
                          Update
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Financial Management
                </Text>
                <HStack spacing={4}>
                  <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                    <Text fontSize="lg" fontWeight="bold">
                      Total Earnings
                    </Text>
                    <Text>$5000</Text>
                  </Box>
                  <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                    <Text fontSize="lg" fontWeight="bold">
                      Pending Payouts
                    </Text>
                    <Text>$200</Text>
                  </Box>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Support Tickets
                </Text>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Ticket</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Ticket 1</Td>
                      <Td>
                        <Badge colorScheme="red">Open</Badge>
                      </Td>
                      <Td>
                        <Button size="sm" colorScheme="green">
                          Resolve
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}

      {role === "support" && (
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Support Dashboard</Tab>
            <Tab>Ticket Management</Tab>
            <Tab>Knowledge Base</Tab>
            <Tab>User Profiles</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Support Dashboard
                </Text>
                <HStack spacing={4}>
                  <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                    <Text fontSize="lg" fontWeight="bold">
                      Open Tickets
                    </Text>
                    <Text>10</Text>
                  </Box>
                  <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                    <Text fontSize="lg" fontWeight="bold">
                      Resolved Tickets
                    </Text>
                    <Text>50</Text>
                  </Box>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Ticket Management
                </Text>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Ticket</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Ticket 1</Td>
                      <Td>
                        <Badge colorScheme="red">Open</Badge>
                      </Td>
                      <Td>
                        <Button size="sm" colorScheme="green">
                          Resolve
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Knowledge Base
                </Text>
                <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                  <Text>FAQs</Text>
                </Box>
                <Box p={4} borderWidth="1px" borderRadius="lg" width="full">
                  <Text>Solutions Database</Text>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  User Profiles
                </Text>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>User</Th>
                      <Th>Email</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>John Doe</Td>
                      <Td>john.doe@example.com</Td>
                      <Td>
                        <Button size="sm" colorScheme="blue">
                          View
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </Container>
  );
};

export default Index;
