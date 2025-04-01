# Security measures at every layer of the OSI model

## OSI MODEL
The Open Systems Interconnection (OSI) model serves as a conceptual framework that categorizes network communication functions into seven distinct layers. This model establishes a universal language for computer networking, facilitating communication between various technologies. It encapsulates all forms of network communication across both software and hardware components. In essence, the OSI model provides a structured and comprehensive approach to networking, ensuring interoperability and standardized communication across diverse devices and applications.

## Application Layer – Implementation of Web Application Firewall
  - Filters HTTP traffic between the web application and the internet
  - Protects against attacks like cross-site scripting and SQL injection
  - Allows quick policy modifications to respond to new threats
  - Acts as a shield between the server and potential malicious traffic

## Presentation Layer – Implementation of Encryption Protocols
  - Encodes and formats data for different system compatibility
  - Uses SSL/TLS for secure data transmission
  - Employs both asymmetric and symmetric encryption
  - Requires an SSL/TLS certificate for secure communication

## Session Layer – Restrict Failed Session Attempts
  - Manages the beginning and end of application connections
  - Uses Fail2ban to prevent brute-force attacks
  - Bans IP addresses with suspicious authentication attempts
  - Helps prevent unauthorized access and session hijacking

## Transport Layer – DDoS Protection and Mitigation Services
  - Ensures orderly arrival of data packets
  - Cloudflare provides cloud-based DDoS protection
  - Uses dedicated anti-DDoS hardware
  - Maintains the performance of legitimate network traffic

## Network Layer – IDS/IPS Implementation
  - Monitors the network for potential security incidents
  - Identifies and stops potential security threats
  - Creates network segmentation zones
  - Provides visibility into emerging security risks

## Data Link Layer – MACsec Implementation
 - Connects machines across a network
 - Requires compatible network devices
 - Uses a key server for distributing encryption keys
 - Secures network communication at the data link level

## Physical Layer – Video Surveillance
  - Focuses on physical security measures
  - Uses high-definition IP cameras
  - Considers power and connectivity requirements
  - Enables centralized monitoring and control
