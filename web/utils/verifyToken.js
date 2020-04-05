const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const bearerHeader = req.headers["authorization"];
	if (typeof bearerHeader !== "undefined") {
		try {
			const bearer = bearerHeader.replace(/^JWT\s/, ``).split(" ");
			const bearerToken = bearer[1].replace(/^"(.*)"$/, "$1");
      req.token = bearerToken;
      
      jwt.verify(bearerToken, process.env.JWT_SECRET, async (err, result) => {
        if(err) res.status(500).json({isOpSuccess: false, message: "crashed at jwt verifyToken"});
        if(result) {
          req.tokenContent = result;
          next();
        } else {
          res.status(401).json({isOpSuccess: false, message: "Invalid token"});
        }
      });
		} catch(error) {
			res.status(400).json({isOpSuccess: false, message: "Check token format"});
		}
	} else {
		res.status(400).json({isOpSuccess: false, message: "Check token format"});
	}
}

exports.verifyToken = verifyToken;