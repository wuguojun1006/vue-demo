<template>
  <div class="wrap flex flex-x-center flex-y-center">
    <div class="container">
      <div class="login">
        <h1 class="login-heading"><strong>Welcome.</strong> Please login.</h1>
        <input type="text" name="user" placeholder="Username" required="required" v-model="userName" class="input-txt" />
        <input type="password" name="password" placeholder="Password" required="required" v-model= "passWord" class="input-txt" />
        <div class="login-footer">
          <a href="#" class="lnk">
            <span class="icon icon--min">ಠ╭╮ಠ</span>I've forgotten something
          </a>
          <button @click="signIn" type="submit" class="btn btn--right">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    signIn () {
      if (this.userName === '吴国俊' && this.passWord === 'wgj416416') {
        this.$alert('Hello', 'Welcome Back', 'success')
        setTimeout(() => {
          this.$alert.close()
          document.body.removeAttribute('class', 'bg_color')
          this.$router.replace({ path: 'content' })
        }, 2000)
      } else {
        this.$alert('哎呦喂', '账号或密码错误', 'error')
      }
    }
  },
  beforeCreate () {
    document.getElementsByTagName('body')[0].className = 'bg_color'
  }
}
</script>
<style lang="scss" scoped>
.wrap{
  height: 100%;
  .container {
    width: 500px;
    height: 400px;

    .login {
      width: 450px;

      .login-heading {
        color: white;
      }
      .input-txt {
        width: 100%;
        padding: 20px 10px;
        background: #5D92BA;
        border: none;
        font-size: 16px;
        color: white;
        border-bottom: 1px dotted rgba(250, 250, 250, 0.4);
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -moz-transition: background-color 0.5s ease-in-out;
        -o-transition: background-color 0.5s ease-in-out;
        -webkit-transition: background-color 0.5s ease-in-out;
        transition: background-color 0.5s ease-in-out;

        &:-moz-placeholder {
          color: #81aac9;
        }
        &:-ms-input-placeholder {
          color: #81aac9;
        }
        &::-webkit-input-placeholder {
          color: #81aac9;
        }
        &:focus {
          background-color: #4478a0;
        }
      }
      .login-footer {
        margin: 10px 0;
        overflow: hidden;
        float: left;
        width: 100%;
        .btn {
          padding: 15px 30px;
          border: none;
          background: white;
          color: #5D92BA;
        }
        .btn--right {
          float: right;
        }
        .icon {
          display: inline-block;
        }

        .icon--min {
          font-size: .9em;
        }

        .lnk {
          font-size: .8em;
          line-height: 3em;
          color: white;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
