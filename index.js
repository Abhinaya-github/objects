/*You are given an object book with the properties title, author, and yearPublished. Perform the following operations:
1.	Access the author property and print it.
2.	Modify the yearPublished property to 2022.
3.	Add a new property genre to the book object with the value “Fiction”.
4.	Delete the title property from the book object.
*/

var book={
    "titile":"introduction to Javascript",
    "author":"Brendan Eich",
    "yearPublished":1995,
}
console.log(book);

console.log(book.author);

book['yearPublished']=1992;
book.genere='fiction';
delete book['titile'];
console.log(book);

/*You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
1.	Access the position property and print it.
2.	Modify the salary property to 50000.
3.	Add a new property department to the employee object with the value “HR”.
4.	Delete the age property from the employee object.
*/

var employee={
    "name":"abhinaya",
    "age":22,
    "position":"developer",
    "salary":"7lpa",
    
}
console.log(employee);
console.log(employee.position);
employee.department='HR';
delete employee['age'];
console.log(employee);

/*You are given an object product with the properties id, name, price, and category. Perform the following operations:
1.	Access the price property and print it.
2.	Modify the category property to “Electronics”.
3.	Add a new property inStock to the product object with the value true.
4.	Delete the id property from the product object.
*/

var product={
    'id':123,
    'name':"smartphone",
    'price':30000,
    'category':'mobile',
}
console.log(product);
console.log(product.price);
product['category']="Electronics";
product['instock']='true';

delete product['id'];
console.log(product);

/*You are given an object car with the properties make, model, year, and color. Perform the following operations:
1.	Access the make property and print it.
2.	Modify the color property to “Black”.
3.	Add a new property engineType to the car object with the value “V6”.
4.	Delete the year property from the car object.*/

var car={
    'make':"tata",
    "model":"punch",
    "year":"2024",
    "color":"white",
}
console.log(car);
console.log(car.make);
car.color="black";
car.enginetye="V6";
delete car.year;
console.log(car);
/*You are given an object student with the properties name, age, grade, and school. Perform the following operations:
1.	Access the school property and print it.
2.	Modify the grade property to 95.
3.	Add a new property hobbies to the student object with the value ["reading", "sports"].
4.	Delete the age property from the student object.
*/

var student={
    'name':"abhinaya",
    'age':16,
    'grade':8.8,
    'school':"st.paul's high school",
}
console.log(student);

console.log(student.school);
student.grade=95;
student.hobbies='reading,sports';
delete student.age;
console.log(student);

/*1.	Access the city property from the address object and print it.
2.	Modify the theme property in the preferences object to “light”.
3.	Add a new property phone to the profile object with the value “555-9876”.
4.	Delete the zip property from the address object
*/
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  };
  console.log(user.profile.address.city);
  user.preferences.theme="light";
  console.log(user);
  user.profile.phone="555-9876";
  delete user.profile.address.zip;
  console.log(user);
  /*1.	Access the email of the second employee (Bob) and print it.
2.	Modify the phone number of Alice to “555-1111”.
3.	Add a new property department with the value “Engineering” to the first employee (Alice).
4.	Delete the location property from the company object.
*/
  
  const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  };

  console.log(company.employees[1].contact.email);
  company.employees[0].contact.phone="555-1111";
  company.employees[0].department="Engineering";
  delete company.location;
  console.log(company);
  
  
  









