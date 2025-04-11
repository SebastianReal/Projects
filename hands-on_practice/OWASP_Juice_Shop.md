# OWAS JUICE SHOP - REPORT

## Introduction
This assessment aims to discover and identify vulnerabilities on The Juice Shop’s website and recommend methods to remediate them.

## Objective
The objective of this report is to provide an analysis of the possible vulnerabilities and flaws discovered on the Juice Shop website as well as proposed measures that could be implemented to resolve these issues. This piece of work equally helps us to figure out the effectiveness of the security measures already put in place to make sure they can withstand possible attacks from potential threat actors. It’s worth mentioning that the discovered loopholes have been classified and eventual recommendations have been formulated to ease understanding and enable the decision-makers to easily come up with a response plan.
 
## Requirements
The penetration test focused on Juice Shop version 15.3.0 deployed within a Docker container hosted on a Linux VM. The Kali OS comes with a number of built-in tools. The main one used for this assessment was Burp Suite Community Edition. This is a powerful tool used in penetration tests for web applications. The assessment spanned both front-end and back-end components and extended over a one-month period. Notably, the testing team operated without administrative or normal credentials and instead simulated an authenticated user scenario to assess security controls. The primary aims of this penetration test were to identify vulnerabilities, evaluate existing controls, and provide guidance. Throughout the testing process, efforts were made to avoid disruptions to legitimate users.

## Execution Environment
To properly perform the penetration testing, it is primordial to have a proper environment
  - Firstly, we had to pull the website using the command docker pull bkimminich/juice-shop. 
  - Then we typed the command docker run --rm -p 3000:3000 bkimminich/juice-shop. This command enables us to run the website on the local host at the address 127.0.0.1 using port 3000. <br/>

<img src="https://github.com/user-attachments/assets/0cc6fa06-17d7-4036-971a-f1c823e31be5" width="500"></br>
Figure 1. Website running on localhost. </br></br>

After running the website, the architecture looked like this: </br>

<img src="https://github.com/user-attachments/assets/cfd59fbe-0860-4419-aded-4839e5895631" width="500"></br>
Figure 2. Testing Environment. </br></br>

## High-Level Summary 
It has identified a total of 9 vulnerabilities within the scope, categorized by severity in the table below.</br>
<img  src="https://github.com/user-attachments/assets/6d012adb-6d9b-4548-8062-5eebb6b000dc" width="500"></br>
Table 1. Vulnerabilities Classification.</br></br>

The Juice Shop website environment was developed using the JavaScript programming language, Angular, Node.JS Framework, and SQLite Database. The environment contains numerous vulnerabilities, including some serious security flaws such as unencrypted passwords and an easily accessible Admin Account, which makes it possible for threat actors to steal data and perform system takeovers.
To perfectly assess the task handed to us, two frameworks were used to classify the discovered vulnerabilities: OWASP (Open Worldwide Application Security Project) and NIST SP800-53 (National Institute of Standards and Technology). These are two international frameworks that serve as guidelines to ensure our different systems, networks and applications are robust against attacks. The OWASP Top 10 serves as a standard awareness document aimed at various web developers and web application security that classifies the most common vulnerabilities known to web applications. It is a widespread agreement on the most significant security risks inherent in web applications. NIST SP 800-53 offers a collection of controls that systems and organizations can use to handle the risks associated with information security and privacy.
Highly important files having sensitive information about the business and clients are easily accessible and visible, putting The Juice Shop at great risk of compliance violation and potentially subjecting it to large fines and/or loss of business reputation.
Among all the vulnerabilities we have discovered, the most critical ones are SQL Injection and Sensitive Data Exposure. Through these vulnerabilities, an attacker could potentially gain unauthorized access, view sensitive data, and even manipulate the information on The Juice Shop website. To ensure the confidentiality, integrity, and availability of data, it is imperative that security remediations be implemented, as described in the recommendations section.</br>

## Risk Rating
The severity rating helps to determine which of the vulnerabilities may have the greatest impact on the functioning and reputation of the company or cause the greatest losses if exploited by an attacker. It’s worth mentioning that the risk ratings attributed to the vulnerabilities are personal judgments based on theoretical and practical experience. These ratings are:
 - Critical: These are vulnerabilities that could be actively exploited in real-world situations, and they may allow remote exploitation by external attackers. A significant impact on the business could be caused by these security flaws, making it necessary for immediate attention in the form of a workaround and/or temporary protection.
 - High: These are vulnerabilities that may potentially have serious impacts on the enterprise. These vulnerabilities may require a change in the security systems.
 - Medium: These are vulnerabilities that could potentially contribute indirectly to a more significant incident or be exploited directly to a limited extent in terms of availability and/or impact. This category of vulnerability is not likely to result in a significant compromise on its own; however, a substantial danger can be posed when combined with others.
 - Low: These are vulnerabilities which may present little or no risk directly but may provide valuable information on the structure or functioning of the system to possible attackers.</br></br>

The table below gives an overview of the discovered vulnerabilities and their severity.</br>
<img src="https://github.com/user-attachments/assets/3ab4fd77-88fb-456c-9b10-eba21ea55761" width="500"></br>
Table 2. Rating of Findings.</br></br>

## Report - Methodologies 
### SQL Injection

During a web application's design, it is important to properly define the type of input that should be accepted within a given entry area. If this is not done, it opens a loophole in the application which can be exploited by possible threat actors. One of such attacks that could be performed is the Structured Query Language (SQL) Injection. SQL injection is a vulnerability in web security that enables an attacker to manipulate the queries executed by an application on its database. The table below gives us the references from OWASP and NIST when it comes to SQL Injection.</br>
<img src="https://github.com/user-attachments/assets/ab427413-56ea-4613-9cab-c8ca80312524" width="500"></br>
Table 3: SQL Injection References.</br></br>

It has been discovered that the login page of the Juice Shop Website is susceptible to SQL Injection. Hence, by entering the query ‘ or 1=1-- as username and putting any password, we were able to have access to the admin account of the web application. As such, it was possible to read some valuable information from the database and perform administrative operations. The screenshot below shows how we performed this attack.</br>
<img src="https://github.com/user-attachments/assets/279cd0e4-9a77-46b6-ad49-d15938a6c65e" width="500"></br>
Figure 3: SQL Injection performed.</br></br>
This command will log us into the admin account as shown in the screenshot below:</br>
<img src="https://github.com/user-attachments/assets/046d4a76-a783-4082-ac08-90762fe6f424" width="500"></br>
Figure 4: Access granted to the admin account.</br></br>

#### Recommendations
 - Juice Shop should use parameterized queries when interacting with the database backend. A parameterized query is a method whereby the SQL query is differentiated from the user input values. This implies that the input values will no longer be seen as executable code but as simple parameters. Nowadays, parametrized queries are known to be one of the most effective ways to avoid SQL Injection attacks.
 - Incorporate features into the application to conduct integrity checks on received data. If the data does not align with the anticipated format, it should be rejected.
 - Also, we strongly recommend the developers make use of the SQL Injection Cheat Sheet using the URL https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html. This will help them get acquainted with the different measures to be taken to avoid SQL Injection.</br></br>
 
### Authorization Bypass

An authorization bypass happens when someone can get around the planned security measures and gain unauthorized access or privileges for specific functions. In simpler terms, it is a security weakness that allows an attacker access to resources or does things without the right permission or proper authentication. The main problem is that the application doesn't validate input properly. When a web app takes input from a user and uses it to get data or grant access, it is crucial for the app to confirm that the user is allowed to do that specific action. Authorization bypass is recognized and classified in the following table. During the penetration tests, two categories of authorization bypass were identified: Coupon fraud and User Role.

#### Coupon Fraud
The coupon fraud is recognized as authorization bypass, and it is classified in the following table.</br>
<img src="https://github.com/user-attachments/assets/e8f3736d-275f-4778-b800-6cdfa101bea7" width="500"></br>
Table 4. Coupon Fraud classification.</br></br>

The ability to obtain a coupon from a chatbot simply by insisting on it indicates a lack of thorough testing before deploying the feature into production. This kind of flaw could potentially allow anyone to exploit the system and receive unauthorized discounts, posing a risk of financial loss for the organization.
To take advantage of this vulnerability, a person must log into their account and look for ‘Support Chat’ in the left menu.</br>

<img src="https://github.com/user-attachments/assets/d6156d0c-77d6-4c3c-9044-125b9278cf95" width="500"></br>
Figure 5: Accessing the account.</br></br>

<img src="https://github.com/user-attachments/assets/bf9f845a-7bf7-4e08-a1c8-841f2bd7412c" width="500"></br>
Figure 6: Looking for an online chat.</br></br>

Once on that webpage, the person must give a name and afterwards ask for a coupon.</br>
<img src="https://github.com/user-attachments/assets/4e88aab9-b629-4484-9418-3205bef3916a" width="500"></br>
Figure 7: Giving a name and asking for a coupon.</br></br>

<img src="https://github.com/user-attachments/assets/7f738281-2964-4233-a84c-c99c76bf46d1" width="500"></br>
Figure 8: Insisting on the request.</br></br>

<img src="https://github.com/user-attachments/assets/82eb7b9a-9e89-4f38-8e34-9862a8429570" width="500"></br>
Figure 9: Coupon obtained.</br></br>

As shown in the earlier screenshots, by insisting on the coupon, the chatbot gives a 10 % coupon without authorization from the CFO or the person in charge.
##### Recommendations 
 - Conduct a thorough test of the features that are going to be implemented before they are launched into production. This way, various vulnerabilities can be discovered and addressed on time.
 - The adoption of the Least Privilege Principle which involves assigning the minimum necessary permissions to users or systems for their tasks. By doing so, you ensure that users or systems can only perform actions essential to their roles or tasks, reducing the risk of unauthorized or unintended activities.

#### User Role
The user role is an important aspect of account management. These roles are often linked to an account and transmitted to the database during account creation. An attacker may capture these roles upon account creation and modify them to give privileges to the account being created. The account data in transit during creation is vulnerable to being captured if an attacker is present on the internal network. Therefore, encrypting all information sent over the network is a good practice. If the information is not encrypted and authentication mechanisms are not functioning correctly, sensitive information can be viewed and even manipulated, leading to unauthorized activities.</br> 

<img src="https://github.com/user-attachments/assets/c91e7b56-4f72-4c84-90e1-ac7061c65997" width="500"></br>
Table 4. User Role Classification.</br></br>

A proxy server must be used; in this case, the tool Burp Suite has its own browser by so it’s not necessary to edit the proxy configurations in a normal web browser. To exploit this vulnerability, the attacker must create a new user.</br>

<img src="https://github.com/user-attachments/assets/85851a10-c8ab-4be0-8c2e-09d38d86c810" width="500"></br>
Figure 10: Creation of a new account.</br></br>
