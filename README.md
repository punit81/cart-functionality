This is my Cart Functionality post assessment Project after angular training 10 by finastra.

use 'npm install --legacy-peer-deps' to install the project

USER: PUNIT
Password: Misys1234

problem statement:

Hello All,


Thanks for your participation in Angular 10 training. As a next step please work on your post assessment project as mentioned below:


Use cases
1. Incorporate cart functionality in the existent system, should be able to the following
- Add to Cart
- Remove from Cart
- Update Cart
2. Computation of cart total & pricing dynamically based on quantity changes
3. Dynamic currency codes to be fetched & computed using https://fixer.io/
4. Achieve session management for cart
5. Add UI using bootstrap : https://getbootstrap.com/
6. Filtering products by name
7. Sorting products by name & price
8. Pagination to be done, by displaying 20/page


Note:    This project is mandatory. The updated code should be uploaded to a sub directory created in the repository link already shared with you during the session of a OneDrive.

Regards,
Learning Enablement.






--------------------------------------------------------------------------Extra-------------------------------------------------

Command to build war file:

in index.html change  <base href="/"> to <base href="./">

in VS code CMD:
ng build --configuration production


then :

go to cart-functionality\dist\cart-functionality folder

Launch CMD and run command 

jar cvf dist.war *.*

copy dist.war and asset folder in tomcat webapps folder

launch go to bin folder of tomcat eg. apache-tomcat-8.0.32\bin

and double click startup.bat



launch chrome-> go to link localhost:8080/dist

for viewing outside this PC launch PCname:8080/dist.  eg. http://blrldbnj593:8080/dist/


