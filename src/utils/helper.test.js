import { describe,it,expect } from "vitest";
import { USER_API, add, fetchUser, isAuthenticated, language, reverseString, userDetails } from "./helper";


describe("addFunction",()=>{
    it("return 1+1 = 2",()=>{
        expect(add(1,1)).toBe(2)
    })

    it("check for strings",()=>{
        expect(add("1","1")).toBe(0)
    })

    it("check for arrays",()=>{
        expect(add(["1"],["1"])).toBe(0)
    })
})

describe("reverseString()",()=>{
    it("reversestring",()=>{
        expect(reverseString("jithin")).toBe("nihtij")
    })
})

describe("USER_API",()=>{
    it("check if     url is correct!",()=>{
        expect(USER_API).toBe("http://api.com/user")
    })
})

describe("Language",()=>{
    it("check if language has 3 items",()=>{
        expect(language).toEqual(["js",'css',"html"])
    })
})

describe("User Details",()=>{
    it("check if object has 2 properties",()=>{
        expect(userDetails).toHaveProperty("name")
        expect(userDetails).toHaveProperty("age")
    })
})

//describe("API",()=>{
//     it("check if API return data",async ()=>{
//        const data =  await fetchUser()
//        expect(data).toHaveProperty("title")
//        expect(data).toHaveProperty("id")
//        expect(data).toHaveProperty("completed")
//     },10000)
//})

describe("isAuthenticated",()=>{
    it("check if user is logged in?",()=>{
        expect(isAuthenticated).toBeTruthy()
    })
    it("check if user is logged not in?",()=>{
        expect(()=>isAuthenticated(false)).throw()
    })
})

