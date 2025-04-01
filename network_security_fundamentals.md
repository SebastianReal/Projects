# Network Security Fundamentals

## Bell-LaPadula Model (BLP)
It is an old model, which was introduced in the 70s, and used for enforcing access control in government and military applications that focuses on data confidentiality and controlled access to classified information. There are two fundamental entities, one of which is subjects (S) that are active elements and the other one is objects (O) that are passive elements in the system. 
The main goal of this model is to manage and organize the access of subjects to objects. Officially, the Bell-LaPadula Model doesn’t allow subjects from a lower security level to read higher-level security information due to the rule No Read Up, and it doesn't allow subjects from a higher security level to write or share documents towards a lower security level due to the rule No Write Down. 

<img src="https://github.com/user-attachments/assets/05c8ce4b-5d3e-422d-8351-3c2368781a9c" width="450">

## Microsoft Tier 0 for Active Directory
Following the Active Directory Tier Model, it refers to goods that represent the most critical IT assets to an organization, such as accounts, groups, domain controllers, and servers. Those goods are considered the most privileged assets and accounts in an IT environment, making them a primary target of threat actors and vulnerable to attacks.
To mitigate this risk, Tier 0 assets and accounts should be managed and accessed by a small group of authorized personnel, and management of Tier 0 systems should be segregated from other systems using dedicated accounts.

<img src="https://github.com/user-attachments/assets/adb93346-a396-4a0b-ad27-ccd1fd16dd88" width="450">

## Conclusion
Both models refer to those who are specifically allowed to access certain sorts of information. On one hand, the Bell-LaPadula Model establishes subjects and objects, objects which will be sorted, and then it will be determined those subjects will have access to them. It's like a one-way street for data access, ensuring that information flows securely from high clearance levels to low clearance levels, preventing unauthorized access and leaks. On the other hand, the tier-based administration model, which was introduced by Microsoft in 2012, consists of creating a partition between the administrators according to the resources they manage. This segregation helps to protect sensitive information and resources and prevents breaches at a lower trust level. 

Based on the timeline, we can deduce that Microsoft took the Bell-LaPadula model as a reference for its model. There are many strong similarities, such as recognizing how sensitive information is and segregating those who are allowed to interact with that kind of information. Therefore, the tier-based administration model separates the administration of resources into three levels, according to their criticality. This means that the administrators who manage the users’ workstations are separated from those who manage the servers and those who manage the enterprise identity repository. It should be emphasized that the Bell-LaPadula model could separate the categories as much as they needed because their work was related to various kinds of information, depending on the scope. However, that is not common in the technology industry because the most general way that companies work is with a few tiers of segregation.
