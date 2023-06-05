 function createMovieList(userInput){
    let listedlist =  `
    <tr>
    <td>${userInput.title}</td>
    <td>${userInput.rating}</td>
    <td><button class = "delBtn" id =${userInput.currMovId}>Delete</button></td>
    </tr>
    `;
    return listedlist;
 }
 let currMovId = 0;
 let movList = [];
 let isSorted = false;

 $('#submit').on("click",function(event){
    event.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();

    movie = {title,rating, currMovId};
    movList.push(movie);
    console.log(movList);

    let addedMovie = createMovieList(movie);
    $('tbody').append(addedMovie);
    $('input').val(this.defaultValue);

    currMovId++;
 })

 $('tbody').on("click",".delBtn",function(event){
    //console.log(this);

    $(this).closest('tr').remove();
    thisIndexNum = $(this).attr('id');
    //console.log(indexNum);
    movList.splice(thisIndexNum,1);

 });
$('.material-icons').eq(0).on("click",sortListByA);

 function sortListByA(){
    let sortedList;
    isSorted = !isSorted;
    if(isSorted){
        const icon = document.querySelector('.material-icons');
        icon.textContent ="arrow_drop_down";
        sortedList = movList.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        //console.log(sortedList);
        isSorted = true;
    }
    
    else{
        sortedList = movList.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
        
            if (fa > fb) {
                return -1;
            }
            if (fa < fb) {
                return 1;
            }
            return 0;
        });
        console.log(sortedList);
    }
   $('tbody').empty();
   for(let movie of sortedList){
    let addedMovie = createMovieList(movie);
    $('tbody').append(addedMovie);
   }
   isSorted = false;
 }



