import { checkEmail, checkMessage, checkName } from "@/utils"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  console.log("Request", request)
  try {
    const { name, email, subject, message } = (await request.json())

    if (!(checkEmail(email) && checkMessage(message) && checkMessage(subject) && checkName(name))) {
      return NextResponse.json({ message: "Email, message, subject, or name not valid", success: false })
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      })
    }).then(() => {
      return NextResponse.json({ message: "Message sent", success: true })
    }).catch((err) => {
      return NextResponse.json({ message: err,  success: false })
    })
  } catch (error) {
    return NextResponse.json({ message: error, success: false })
  }
}
// import { NextRequest, NextResponse } from "next/server"
//
// export const dynamic = "force-dynamic"
//
// const handleError = (res: NextResponse, message, status = 400) => {
//   res.statusCode = status;
//   res.json({ status: "error", message });
// };
//
// const fields = {
//   name: {
//     type: "text",
//     valType: "string",
//     label: "Your name",
//     placeholder: "Your name e.g. Darlene Alderson",
//     minLength: 2,
//     maxLength: 128,
//   },
//   email: {
//     type: "email",
//     valType: "string",
//     label: "Your email:",
//     placeholder: "Your email e.g. Dolores.Haze@virtualrealty.com",
//     minLength: 5,
//     maxLength: 256,
//   },
//   subject: {
//     type: "text",
//     valType: "string",
//     label: "Message subject:",
//     placeholder: "Message subject e.g. General Inquiry",
//     minLength: 2,
//     maxLength: 64,
//   },
//   message: {
//     type: "textarea",
//     valType: "string",
//     label: "Message:",
//     placeholder: "Your message",
//     minLength: 1,
//     maxLength: 256,
//   },
// };
// const fieldKeys = Object.keys(fields);
//
// export const POST = async (req: NextRequest) => {
//   const invalidFields = [];
//   let message = "";
//
//   for (const key of fieldKeys) {
//     const field = fields[key];
//     const val = req.body[key];
//     if (
//       typeof val !== field.valType ||
//       (field.minLength && val.length < field.minLength) ||
//       (field.maxLength && val.length > field.maxLength)
//     ) {
//       invalidFields.push(key);
//     } else {
//       if (message.length) message += "\n\n";
//       message += `${key}: ${val}`;
//     }
//   }
//
//   if (invalidFields.length) {
//     return handleError(
//       NextResponse,
//       'Received invalid fields: ${invalidFields.join(", ")}',
//     );
//   }
//
//   try {
//     const messageRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//         },
//         body: JSON.stringify({
//           name: req.body.name,
//           email: req.body.email,
//           subject: req.body.subject,
//           message: req.body.message,
//         }),
//       },
//     );
//
//     if (!messageRes.ok) {
//       throw new Error(
//         `request failed with status ${NextResponse.status}: ${await messageRes
//           .text()
//           .substr(0, 50)}`,
//       );
//     }
//     return NextResponse.json({
//       status: "ok"
//     });
//   } catch (err) {
//     const errorMessage = "Failed to send message";
//     console.error(errorMessage, err);
//     return handleError(NextResponse, errorMessage, 500);
//   }
// };
//
//
