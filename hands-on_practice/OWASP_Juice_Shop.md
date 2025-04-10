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
  - Then we typed the command docker run --rm -p 3000:3000 bkimminich/juice-shop. This command enables us to run the website on the local host at the address 127.0.0.1 using port 3000. <br/></br>

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
Among all the vulnerabilities we have discovered, the most critical ones are SQL Injection and Sensitive Data Exposure. Through these vulnerabilities, an attacker could potentially gain unauthorized access, view sensitive data, and even manipulate the information on The Juice Shop website. To ensure the confidentiality, integrity, and availability of data, it is imperative that security remediations be implemented, as described in the recommendations section.



