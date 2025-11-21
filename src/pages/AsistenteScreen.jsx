import React, { useState } from "react";
import { infoUser } from "../infoUser";
import "../styles/asistente.css";

export const AsistenteScreen = () => {
  const userData = infoUser();
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hola Rey 👑, soy tu asistente financiero IA. ¿En qué te ayudo hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    // Añadir mensaje del usuario
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Petición al modelo Gemini
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDJlt1AfX5Xu7K1c8QAwoD_iHN4_HCaNFM",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `Eres un asistente financiero. Usa esta información del usuario para responder:
${JSON.stringify(userData, null, 2)}

Pregunta del usuario: ${input}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      const aiMessage = {
        sender: "bot",
        text:
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No pude procesar la respuesta 😅",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error con Gemini:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Hubo un error al conectar con la IA 😔" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="asistente-container">
      <h2>Asistencia de gastos con IA</h2>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <p className="loading">Pensando...</p>}
      </div>

      <form onSubmit={handleSend} className="chat-form">
        <input
          type="text"
          placeholder="Escribe tu pregunta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
