import CLG from "console-log-advanced";
const clg = new CLG({ isDevelopMode: true })

export const dataValidator = async ({ schema, data, component }) => {
    const { success, error } = await schema.safeParse(data)
    if (!success) {
        clg.logger({ name: "zod issues", value: error.issues, path: component })
    }
}