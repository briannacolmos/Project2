/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
/* Hi this is my project two, I am going for a 'meets expectations'. Thank you for your time. */


// Global Variables
const theStudents = document.querySelectorAll('.student-item');
let studentsPerPage = 10;


// variables for the search box 
const pageHeader = document.querySelector('div.page-header')
const studentNames = document.querySelectorAll('h3');
const studentSearch = document.createElement('div');


// Selecting the input button and search box
const input = document.createElement('input');
input.className= 'search-input';

const button = document.createElement('button');
button.textContent = 'search';
button.className = 'searchButton';
studentSearch.className = 'student-search';
input.placeHolder = 'Search for students';
studentSearch.appendChild(input);
studentSearch.insertBefore(button, input.nextElementSibling);
pageHeader.appendChild(studentSearch);

const searchButton = document.querySelector('.searchButton');
const searchInput = document.querySelector('.search-input'); 


// function to determine page number with number of students on the page
function getNumberOfPages() {
   return Math.ceil (theStudents.length / studentsPerPage); 
}

// Creating a show page function to hide all the other students but 10 of them. 
function showPage(theStudents, page) {
   let startIndex = (page * studentsPerPage) - studentsPerPage;
   let endIndex = page * studentsPerPage;

   for(let i = 0; i < theStudents.length; i++){
      if (i >= startIndex && i <endIndex) {
      theStudents[i].style.display = ''; 
      } else {
      theStudents[i].style.display = 'none';
      }
   }
}

// creating a function that appends page links
function appendPageLinks() {

   let page = document.querySelector('.page');
   let div = document.createElement('div');
   let ul = document.createElement('ul');
   div.className =('pagination');
   div.setAttribute('class' , 'pagination')
   page.appendChild(div);
   div.appendChild(ul);

for(let i = 1; i <= getNumberOfPages(theStudents); i++) {
   let li = document.createElement('li');
   let a = document.createElement('a');
   a.setAttribute('href', '#');
   ul.appendChild(li);
   li.appendChild(a);
   a.textContent = i;
   a.addEventListener('click', () => {
      let a = document.querySelectorAll('.pagination li a');
      for(let b = 0; b < a.length; b++) {
         a[b].className = '';
      }
      event.target.className = 'active';
      showPage(theStudents, event.target.textContent);
   });
}

}
showPage(theStudents, 1);
appendPageLinks();