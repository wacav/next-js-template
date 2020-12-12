import { NextApiHandler } from "next";

// Mock Api Handler
export const mockMemberData: NextApiHandler = (req, res) => {
  const authorization = req.headers.authorization;
  const authType = "Bearer ";
  if (
    authorization &&
    authorization.startsWith(authType) &&
    authorization.replace(authType, "") !== "NOT_TOKEN"
  ) {
    res.send({
      name: "DOTOLI.DEV",
      level: 1,
      mobile: "010-0000-0000",
    });
  } else {
    res.status(401).end();
  }
};
