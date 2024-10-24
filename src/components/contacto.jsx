import React, { useState } from "react";

export default function Contacto() {
  const apiUrl = import.meta.env.VITE_ENDPOINT_MAILS; // Asegúrate de que la variable de entorno esté definida
  const [formData, setFormData] = useState({ subject: "", message: "" });
  const [alert, setAlert] = useState({
    visible: false,
    message: "",
    isError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showAlert = (message, isError = false) => {
    setAlert({ visible: true, message, isError });
    setTimeout(() => setAlert({ ...alert, visible: false }), 5000); // Oculta la alerta después de 5 segundos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toUser = "auladesoftwarelibre@gmail.com";
    const subject = "From: " + formData.subject;
    const message = formData.message;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toUser: [toUser],
          subject,
          message,
        }),
      });

      if (response.ok) {
        showAlert("Mensaje enviado con éxito");
        setFormData({ subject: "", message: "" }); // Reinicia el formulario
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      showAlert(
        "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        true
      );
    }
  };
  return (
    <div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:gap-12 xl:gap-20">
          <div className="w-full md:w-1/3 max-w-md mt-16 text-center md:text-left">
            <h1 className="text-white text-4xl md:text-5xl font-bold flex items-center justify-center lg:justify-start gap-5"></h1>
            <span className="text-slate-400 text-sm text-center">
              Contacta con nosotros para más información y unirte a nuestra
              maravillosa comunidad.
            </span>
          </div>

          <form id="contacto" className="w-full md:w-2/3 max-w-lg mt-16">
            <div className="relative mb-6">
              <input
                type="text"
                name="subject"
                className="peer block min-h-[auto] w-full rounded border-b-2 border-slate-400 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-b-2 focus:border-blue-600 text-white placeholder:text-neutral-500"
                id="asunto"
                placeholder="Introduce tu nombre o tu correo electrónico"
                required
              />
            </div>
            <div className="relative mb-6">
              <textarea
                name="message"
                className="peer block min-h-[auto] w-full rounded border-b-2 border-slate-400 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border-b-2 focus:border-blue-600 text-white placeholder:text-neutral-500 resize-none overflow-hidden"
                id="mensaje"
                placeholder="Mensaje"
                required
                maxlength="400"
                rows="1"
                oninput="this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px';"
              ></textarea>
            </div>
            <div className="mt-4 text-center lg:text-right">
              <button
                type="submit"
                className="cursor-pointer w-auto inline-flex items-center justify-center py-3 px-6 text-base font-semibold text-center text-white rounded-full bg-blue-600 shadow-xs hover:bg-blue-800 hover:scale-105 transition-all duration-500"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-[rgba(13,13,67,0.5)] to-[#0d0d43]"></div>

      <div
        id="alertContainer"
        className="fixed bottom-10 right-4 flex justify-center items-end z-50 hidden"
      >
        <div
          id="alertMessage"
          className="flex flex-col gap-2 w-72 sm:w-80 text-xs sm:text-sm z-50"
        ></div>
      </div>
    </div>
  );
}
