import Vue from "vue";
import Vuex from "vuex";
import question from "../apis/openTrivia";
import server from "../apis/server";
import router from "../router";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import numberFacts from "../apis/triviaNumber";

Vue.use(Vuex);
Vue.use(VueToast, { position: "top-right" });

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    messages: [],
    questions: {},
    user: [],
    rooms: [],
    numberFacts: "",
  },
  mutations: {
    SET_STATUS_LOG(state, payload) {
      state.isLoggedIn = payload;
    },
    PUSH_MESSAGES(state, payload) {
      state.messages.push(payload);
    },
    GET_QUESTIONS(state, payload) {
      state.questions = payload;
    },
    GET_NUMBER_FACTS(state, payload) {
      state.numberFacts = payload;
    },
    GET_USER_INFO(state, payload) {
      state.user = payload;
    },
    GET_ROOMS(state, payload) {
      state.rooms = payload;
    },
  },
  actions: {
    async getTrivia(context) {
      try {
        let difficulty = "";
        const randomizeForDifficulty = Math.round(Math.random() * 3);

        if (randomizeForDifficulty === 1) {
          difficulty = "easy";
        } else if (randomizeForDifficulty === 2) {
          difficulty = "medium";
        } else {
          difficulty = "hard";
        }

        const randomizeCategory = Math.round(Math.random() * 25);

        const query = `?amount=1&category=${randomizeCategory}&difficulty=${difficulty}&type=boolean`;

        const response = await question({
          method: "GET",
          url: query,
        });

        if (response.data.response_code === 1) {
          context.dispatch("getTrivia");
        } else {
          context.commit("GET_QUESTIONS", response.data);
        }
      } catch (err) {
        console.log(err);
      }
    },

    async getFactsNumber(context) {
      try {
        const response = await numberFacts({
          method: "GET",
          url: "/random/trivia",
        });

        context.commit("GET_NUMBER_FACTS", response.data);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async login(context, payload) {
      try {
        const response = await server({
          method: "POST",
          url: "/login",
          data: payload,
        });
        localStorage.setItem("access_token", response.data.access_token);
        Vue.$toast.open({
          message: "You have successfully logged in!",
          type: "default",
        });
        context.commit("SET_STATUS_LOG", true);
        context.dispatch("getUserInfo");
        router.push("/lobby");
      } catch (err) {
        Vue.$toast.open({
          message: `${err.response.data.message}`,
          type: "default",
        });
      }
    },

    async register(context, payload) {
      try {
        await server({
          method: "POST",
          url: "/register",
          data: {
            nickname: payload.nickname,
            email: payload.email,
            password: payload.password,
          },
        });

        Vue.$toast.open({
          message: "Please get ready for the quiz!",
          type: "default",
        });
        router.push("/login");
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async googleLogin(context, payload) {
      try {
        const id_token = payload.getAuthResponse().id_token;

        const response = await server({
          method: "POST",
          url: "/authgoogle",
          data: { id_token },
        });

        localStorage.setItem("access_token", response.data.access_token);
        context.commit("SET_STATUS_LOG", true);
        context.dispatch("getUserInfo");
        Vue.$toast.open({
          message: "You have successfully logged in",
          type: "default",
        });
        router.push("/lobby");
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async failLoginGoogleUser() {
      try {
        this.$toast.open({
          message: "Something went wrong!",
          type: "error",
        });
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async logout(context) {
      try {
        localStorage.clear();
        context.commit("SET_STATUS_LOG", false);
        router.push("/");
        Vue.$toast.open({
          message: "You have successfully logged out!",
          type: "default",
        });
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getUserInfo(context) {
      try {
        const response = await server({
          method: "GET",
          url: "/info",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        context.commit("GET_USER_INFO", response.data);
        localStorage.setItem("nickname", response.data.nickname);
        localStorage.setItem("points", response.data.points);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
