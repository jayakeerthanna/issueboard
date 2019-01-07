app.controller('loginController',function($location,$scope,$http) {

$scope.register = register;
$scope.loginPage = loginPage;
$scope.loginUser = loginUser;
$scope.signUser = signUser;
$scope.forPass = forPass;
$scope.changePaasowrd = changePaasowrd;
$scope.errMsg = false;
$scope.registerForm = true;
$scope.forgotPassword = false;
    function register(){
        $scope.forgotPassword = false;

        if($scope.password == $scope.conformPaasword ){
            $scope.errMsg = false;
        localStorage.setItem('name',$scope.name);
        localStorage.setItem('email',$scope.email);
        localStorage.setItem('password',$scope.password);
        localStorage.setItem('conformPass',$scope.conformPaasword);
        localStorage.setItem('number',$scope.number);
        $scope.login = true;
        $scope.registerForm = false;
        }
        
        else{
            $scope.errMsg = true;
        }

    }

    function loginPage(){
        $scope.forgotPassword = false;
      $scope.regNum =  localStorage.getItem('number');
      $scope.regPass =  localStorage.getItem('password'); 
      if( $scope.regNum == $scope.loginNum &&  $scope.regPass == $scope.loginPass){
        window.location.href = "html/index.html";
      }
      else{
         $scope.errMsgLogin = true;
      }

    }

    function loginUser(){
        $scope.login = true;
        $scope.registerForm = false;
        $scope.forgotPassword = false;
    }
    function signUser(){
        $scope.login = false;
        $scope.registerForm = true;
        $scope.forgotPassword = false;
    }
    
    function forPass(){
        $scope.login = false;
       $scope.forgotPassword = true;
    }

    function changePaasowrd(){
        $scope.regNumFor =  localStorage.getItem('number');
        localStorage.removeItem('password');
        localStorage.removeItem('conformPass');
        if( $scope.regNumFor == $scope.forNumber){
             if($scope.forPassword == $scope.forConformPaasword){
             localStorage.setItem('password',$scope.forPassword);
             localStorage.setItem('conformPass',$scope.forConformPaasword);
             $scope.login = true;
             $scope.forgotPassword = false;
             }
             else{
                 alert("password mismatches");
             }
        }
        else{
            alert("invalid mobile number");
        }
    }
})