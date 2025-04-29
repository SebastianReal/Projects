# Security measures at every layer of the OSI model

## OSI MODEL
The Open Systems Interconnection (OSI) model serves as a conceptual framework that categorizes network communication functions into seven distinct layers. This model establishes a universal language for computer networking, facilitating communication between various technologies. It encapsulates all forms of network communication across both software and hardware components. In essence, the OSI model provides a structured and comprehensive approach to networking, ensuring interoperability and standardized communication across diverse devices and applications.

## Application Layer – Implementation of Web Application Firewall
  - Filters HTTP traffic between the web application and the internet
  - Protects against attacks like cross-site scripting and SQL injection
  - Allows quick policy modifications to respond to new threats
  - Acts as a shield between the server and potential malicious traffic
    
  <img src="https://github.com/user-attachments/assets/27d80c21-4877-4834-a655-70f964519b6b" width="550">
  
## Presentation Layer – Implementation of Encryption Protocols
  - Encodes and formats data for different system compatibility
  - Uses SSL/TLS for secure data transmission
  - Employs both asymmetric and symmetric encryption
  - Requires an SSL/TLS certificate for secure communication

    <img src="https://github.com/user-attachments/assets/f4745b22-129f-4aea-a6cd-b1db9f9f7b3d" width="550">

## Session Layer – Restrict Failed Session Attempts
  - Manages the beginning and end of application connections
  - Uses Fail2ban to prevent brute-force attacks
  - Bans IP addresses with suspicious authentication attempts
  - Helps prevent unauthorized access and session hijacking

  <img src="https://github.com/user-attachments/assets/1d66d02f-f943-4208-8c2d-6d4afc49e5de" width="550">

## Transport Layer – DDoS Protection and Mitigation Services
  - Ensures orderly arrival of data packets
  - Cloudflare provides cloud-based DDoS protection
  - Uses dedicated anti-DDoS hardware
  - Maintains the performance of legitimate network traffic

  <img src="https://github.com/user-attachments/assets/d39da15d-1be9-42bb-bba2-da6ddb3a12cd" width="550">

## Network Layer – IDS/IPS Implementation
  - Monitors the network for potential security incidents
  - Identifies and stops potential security threats
  - Creates network segmentation zones
  - Provides visibility into emerging security risks

  <img src="https://github.com/user-attachments/assets/578840fe-6e95-4b4f-ba4f-d5fc8ccda488" width="550">

## Data Link Layer – MACsec Implementation
 - Connects machines across a network
 - Requires compatible network devices
 - Uses a key server for distributing encryption keys
 - Secures network communication at the data link level

  <img src="https://github.com/user-attachments/assets/3e4601dc-468f-4439-b51f-1f81b459ed04" width="550">

## Physical Layer – Video Surveillance
 - Focuses on physical security measures
 - Uses high-definition IP cameras
 - Considers power and connectivity requirements
 - Enables centralized monitoring and control

  <img src="https://github.com/user-attachments/assets/bbd72885-bc22-417a-bfd7-dcd7d5d070c4" width="550">
