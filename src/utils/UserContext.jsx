import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "bhushan",
    mail: "bhushan@ac.in",
  },
  developer: {
    name: "Bhushan with ❤️",
    email: "bhushan752002@gmail.com",
  },
});

// this is not of any use just for the debugging purpose to see it.. (if you not using it its ok)
UserContext.displayName = "UserContext";

export default UserContext;
