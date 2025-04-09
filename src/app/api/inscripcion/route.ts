import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const {
    nrodoc, nombre, apellido, edad, fcumple, direccion, telefono, email, mensaje
    } = data;

   console.log('fcumple: ' + fcumple);
  //const finscripcion = Date();
  //console.log('finscripcion: ' + finscripcion);

  try {
    await pool.query(
      `INSERT INTO participantes (nrodoc, nombre, apellido, edad, fcumple, direccion, telefono,	mail, mensaje, finscripcion)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, CURRENT_DATE)`,
      [nrodoc, nombre, apellido, edad, fcumple, direccion, telefono, email, mensaje]
    );

    return NextResponse.json({ success: true });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.code === '23505') {
      // clave primaria duplicada
      return NextResponse.json(
        { success: false, error: "Ya existe una inscripción con esa cédula" },
        { status: 409 }
      );
    }

    console.error("Error en la inscripción:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
