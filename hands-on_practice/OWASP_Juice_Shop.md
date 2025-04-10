# OWAS JUICE SHOP - PENTESTING
---
## Introduction
This assessment aims to discover and identify vulnerabilities on The Juice Shop’s website and recommend methods to remediate them.

## Objective
The objective of this report is to provide an analysis of the possible vulnerabilities and flaws discovered on the Juice Shop website as well as proposed measures that could be implemented to resolve these issues. This piece of work equally helps us to figure out the effectiveness of the security measures already put in place to make sure they can withstand possible attacks from potential threat actors. It’s worth mentioning that the discovered loopholes have been classified and eventual recommendations have been formulated to ease understanding and enable the decision-makers to easily come up with a response plan.
 
## Requirements
The penetration test focused on Juice Shop version 15.3.0 deployed within a Docker container hosted on a Linux VM. The Kali OS comes with a number of built-in tools. The main one used for this assessment was Burp Suite Community Edition. This is a powerful tool used in penetration tests for web applications. The assessment spanned both front-end and back-end components and extended over a one-month period. Notably, the testing team operated without administrative or normal credentials and instead simulated an authenticated user scenario to assess security controls. The primary aims of this penetration test were to identify vulnerabilities, evaluate existing controls, and provide guidance. Throughout the testing process, efforts were made to avoid disruptions to legitimate users.

## Execution Environment
To properly perform the penetration testing, it is primordial to have a proper environment
  - Firstly, we had to pull the website using the command docker pull bkimminich/juice-shop. 
  - Then we typed the command docker run --rm -p 3000:3000 bkimminich/juice-shop. 

This command enables us to run the website on the local host at the address 127.0.0.1 using port 3000.
