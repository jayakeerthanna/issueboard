app.controller('indexController',function($location,$scope,$http,$route) {


    $scope.addIssues= addIssues;
    $scope.deleteIssues = deleteIssues;
    $scope.getIssuesData = getIssuesData;
    $scope.editing = editing;
    $scope.name = localStorage.getItem('name');

// datatables
//JK
$(document).ready(function() {
    $('#example').DataTable();
} );
       
        
 //get the issue list
 //JK


$scope.data = [
    {
        "id" : 1,
       "Name" : "data Enrty Problem",
       "Description" : "Software-defined WAN (SD-WAN) is a technology to distribute network traffic across wide area networks (WAN) that uses software-defined networking (SDN) concepts to automatically determine the most effective way to route traffic to and from branch ",
       "createdon" : "04-01-2019"
    },

    { "id" : 2,
    "Name" : "system problem",
    "Description" : "The Indian subcontinent was home to the urban Indus Valley Civilisation of the 3rd millennium BCE. In the following millennium, the oldest scriptures associated with Hinduism began to be composed. Social stratification, based on caste, emerged in the first millennium BCE",
    "createdon" : "04-01-2019"
    },

    {
        "id" : 3,
        "Name" : "function issues",
        "Description" : "the subcontinent came under British East India Company rule, and in the mid-19th under British crown rule. A nationalist movement emerged in the late 19th century, which later, under Mahatma Gandhi, was noted for nonviolent resistance and led to India's independence",
        "createdon" : "04-01-2019"
    },

    {
       "id" : 4,
       "Name" : "entring data pronlem",
       "Description" : "In the early 16th century, northern India, being then under mainly Muslim rulers,[69] fell again to the superior mobility and firepower of a new generation of Central Asian warriors.[70] The resulting Mughal Empire did not stamp out the local societies it came to rule, but rather balanced and pacified them through new administrative practices[71][72] and diverse and inclusive ruling elites,[73] leading to more systematic, centralised, and uniform rule",
       "createdon" : "04-01-2019"
    }
 ]


//add issues

function addIssues() {
    // cuurent date 
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    
    $scope.dateToday = mm + '/' + dd + '/' + yyyy;
    
    alert( $scope.dateToday);
    var id = $scope.data.length + 1;
        $scope.data.push({
        'id' : id,
        'Name' : $scope.nameAdd,
        'Description':  $scope.desc,
        'createdon' :  $scope.dateToday
    });
    alert("issue added successfully");
};

// delete issues

function deleteIssues(id) {
    alert("are you sure to delete this issue?");
    $scope.data.splice(id, 1);
};


// edit issues

function getIssuesData(data){
    console.log(data);
    $scope.idEdit = data.id
    $scope.nameEdit = data.Name;
    $scope.descEdit = data.Description;
    $scope.editItem = data;
    $scope.editing1 = $scope.data.indexOf(data);
 
   
}



function editing(id){
 if($scope.data.pop($scope.idEdit)){
$scope.data.push({
    'id' : $scope.idEdit,
    'Name' : $scope.nameEdit,
    'Description':  $scope.descEdit,
    'createdon' : $scope.dateToday
    })
    alert("updated successfully");
    
}
else{

}
}

})