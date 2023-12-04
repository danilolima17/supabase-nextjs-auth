import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function FormAddress() {
  const [postalCode, setPostalCode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");

  const SUPABASE_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const SUPABASE_KEY: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  const handleInsertAddress = async () => {
    try {
      console.log("Dados a serem inseridos na tabela 'address':", {
        postal_code: postalCode,
        street,
        number,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      const { data, error } = await supabase
        .from("address")
        .insert({
          postal_code: postalCode,
          street,
          number,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

      if (error) {
        throw error;
      }

      console.log("Dados inseridos na tabela 'address':", data);
    } catch (error) {
      console.error("Erro ao inserir dados na tabela 'address':", error);
    }
  };

  const handleUpdateAddress = async () => {
    try {
      console.log("Dados a serem atualizados na tabela 'address':", {
        postal_code: postalCode,
        street,
        number,
        updated_at: new Date().toISOString(),
      });
      const { data, error } = await supabase
        .from("address")
        .update({
          postal_code: postalCode,
          street,
          number,
          updated_at: new Date().toISOString(),
        })
        .eq("postal_code", postalCode);

      if (error) {
        throw error;
      }

      console.log("Dados atualizados na tabela 'address':", data);
    } catch (error) {
      console.error("Erro ao atualizar dados na tabela 'address':", error);
    }
  };

  const handleDeleteAddress = async () => {
    try {
      console.log("Dados a serem excluidos na tabela 'address':", {
        postal_code: postalCode,
        street,
        number,
        updated_at: new Date().toISOString(),
      });
      const { data, error } = await supabase
        .from("address")
        .delete()
        .eq("postal_code", postalCode);

      if (error) {
        throw error;
      }

      console.log("Dados excluidos na tabela 'address':", data);
    } catch (error) {
      console.error("Erro ao excluir dados na tabela 'address':", error);
    }
  };

  return (
    <div>
      <div className="mb-4 space-y-2">
        <label htmlFor="postalCode" className="text-gray-700">
          CEP
        </label>
        <input
          id="postalCode"
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="p-2 w-full text-black bg-gray-200 rounded"
        />
      </div>
      <div className="mb-4 space-y-2">
        <label htmlFor="street" className="text-gray-700">
          Rua
        </label>
        <input
          id="street"
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="p-2 w-full text-black bg-gray-200 rounded"
        />
      </div>
      <div className="mb-4 space-y-2">
        <label htmlFor="number" className="text-gray-700">
          Número
        </label>
        <input
          id="number"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="p-2 w-full text-black bg-gray-200 rounded"
        />
      </div>
      <button
        className="py-2 px-4 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
        onClick={handleInsertAddress}
      >
        Adicionar
      </button>
      <br />
      <br />
      <button
        className="py-2 px-4 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
        onClick={handleUpdateAddress}
      >
        Atualizar
      </button>
      <br />
      <br />
      <button
        className="py-2 px-4 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
        onClick={handleDeleteAddress}
      >
        Excluir endereço
      </button>
    </div>
  );
}
