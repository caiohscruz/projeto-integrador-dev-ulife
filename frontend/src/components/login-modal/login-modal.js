app.directive("loginModal", function (UserModel) {
  return {
    replace: true,
    scope: {
      settings: "=",
    },
    templateUrl: "components/login-modal/login-modal.html",
    controller: function ($scope) {
      var me = $scope;

      teacherLogin = {
        role: "Professor",
        action: "teste",
      };

      studentLogin = {
        role: "Aluno",
        action: "teste",
      };

      if (!me.settings) {
        me.settings = {
          type: "S",
        };
      }

      me.$watch("settings", () => {
        if (me.settings.type == "T") {
          me.content = teacherLogin;
        } else if (me.settings.type == "S") {
          me.content = studentLogin;
        }
      });

      me.hideModal = function () {
        me.settings.isVisible = false;
      };

      me.userLogin = () => {
        var data =  {login: me.login, senha: me.password}
        UserModel.login(data);
      };
    },
  };
});
