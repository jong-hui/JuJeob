import database from "./database";

export function styleMixins<K extends keyof typeof database>(mixinsName: K | (K)[]) {
  if (typeof mixinsName === "number" && database[mixinsName] !== undefined) {
    return database[mixinsName]
  } else if (typeof mixinsName === "number" && database[mixinsName] === undefined) {
    throw new Error("mixinsName undefined in database")
  }

  if (typeof mixinsName === "object" && mixinsName.length > 0) {
    return mixinsName.reduce((acc: (typeof database[K])[], cur) => {
      if (database[cur] !== undefined) {
        return [
          ...acc,
          database[cur]
        ]
      }

      return acc
    }, [])
  }

  throw new Error("can't find any mixins")
}