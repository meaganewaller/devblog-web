const handleError = (res, message, status = 400) => {
  res.statusCode = status;
  res.json({ status: "error", message });
};

const fields = {
  name: {
    type: "text",
    valType: "string",
    label: "Your name",
    placeholder: "Your name e.g. Darlene Alderson",
    minLength: 2,
    maxLength: 128,
  },
  email: {
    type: "email",
    valType: "string",
    label: "Your email:",
    placeholder: "Your email e.g. Dolores.Haze@virtualrealty.com",
    minLength: 5,
    maxLength: 256,
  },
  subject: {
    type: "text",
    valType: "string",
    label: "Message subject:",
    placeholder: "Message subject e.g. General Inquiry",
    minLength: 2,
    maxLength: 64,
  },
  message: {
    type: "textarea",
    valType: "string",
    label: "Message:",
    placeholder: "Your message",
    minLength: 1,
    maxLength: 256,
  },
};
const fieldKeys = Object.keys(fields);

export default async (req, res) => {
  if (!req.body || req.method !== "POST") {
    return handleError(res, "Invalid request");
  }
  const invalidFields = [];
  let message = "";

  for (const key of fieldKeys) {
    const field = fields[key];
    const val = req.body[key];
    if (
      typeof val !== field.valType ||
      (field.minLength && val.length < field.minLength) ||
      (field.maxLength && val.length > field.maxLength)
    ) {
      invalidFields.push(key);
    } else {
      if (message.length) message += "\n\n";
      message += `${key}: ${val}`;
    }
  }

  if (invalidFields.length) {
    return handleError(
      res,
      'Received invalid fields: ${invalidFields.join(", ")}',
    );
  }

  try {
    const messageRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          name: req.body.name,
          email: req.body.email,
          subject: req.body.subject,
          message: req.body.message,
        }),
      },
    );

    if (!messageRes.ok) {
      throw new Error(
        `request failed with status ${res.status}: ${await messageRes.text()
          .substr(0, 50)}`,
      );
    }
    return res.json({ status: "ok" });
  } catch (err) {
    const errorMessage = "Failed to send message";
    console.error(errorMessage, err);
    return handleError(res, errorMessage, 500);
  }
};
