const isAdmin = (req, res, next) => {
    if (req?.user?.isAdmin) {
        next();
    } else {
        throw new Error("You are not authorized to perform this action");
}
}

const isLead = (req, res, next) => {
    if (req?.user?.isLead) {
        next();
    } else {
        throw new Error("You are not authorized to perform this action");
    }
}

const isActive = (req, res, next) => {
    if (req?.user?.isActive) {
        next();
    } else {
        throw new Error("You are not authorized to perform this action");
    }
}

module.exports = { isAdmin, isLead, isActive };

