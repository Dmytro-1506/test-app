import { Request, Response } from "express";

export function test(req: Request, res: Response) {
    res.json({
        status: "test",
        response: "controller is working"
    })
}

export function login(req: Request, res: Response) {
    const correctPassword = "1234";
    const password = req.query.password;

    if (password !== correctPassword) {
        return res.status(401).json({
            message: "Wrong password"
        });
    }

    return res.status(200).json({
        message: "Welcome"
    });
}

export function getMe(req: Request, res: Response) {
    res.json({
        name: "Dmytro",
        profession: "Full Stack Developer",
        country: "Germany"
    })
}

export function greeting(req: Request, res: Response) {
    const name = req.query.name;

    res.json({
        message: `Hello ${name}`
    })
}

export function getUser(req: Request, res: Response) {
    const name = req.query.name;
    const age = req.query.age;
    const id = req.params.id;

    res.json(req.query
    //    {name: name,
    //    age: age,
    //    id: id}
    )
}