import express from "express"
import jwt from "jsonwebtoken"

export const authenticateToken = (req, res, next) => {
  const accessToken = req.headers['authorization'];

  if (!accessToken) {
    return res.status(401).json({ error: 'Unauthorized - Access Token is missing' });
  }

  jwt.verify(accessToken, 'nitesh', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden - Invalid Access Token' });
    }

    req.user = user;
    next();
  });
};
