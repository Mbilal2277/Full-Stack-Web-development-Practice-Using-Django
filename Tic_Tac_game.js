// Connecting restart button



var restart = document.querySelector('#b');

// Connecting all the cells in the table to display X and O

var squares =  document.querySelectorAll('td');

//Deleting content from all the cells when press Restart button

function clearcells() {

   for(var i=0; i<squares.length ; i++)
  {
    squares[i].textContent = '';

  }
}

restart.addEventListener('click', clearcells);

//setting the marker for clearcells





function marker() {
  if (this.textContent === '') {
    this.textContent = 'X'
    }
    else if (this.textContent === 'X') {
      this.textContent = 'O';
      }
      else {
        this.textContent = '';
      }
}

for(var i=0; i < squares.length; i++)
{

squares[i].addEventListener('click', marker);

}
