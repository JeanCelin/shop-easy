import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Product from "@/lib/models/Product";

// GET: Listar todos os produtos
export async function GET() {
  await dbConnect();
  const products = await Product.find({});
  return NextResponse.json(products);
}

// POST: Criar um novo produto
export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const product = new Product(body);
    await product.save();
    return NextResponse.json({ message: "Produto criado com sucesso", product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// PUT: Atualizar um produto pelo ID
export async function PUT(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const { id, ...updateData } = body; // Pegando o ID e os dados a serem atualizados

    if (!id) {
      return NextResponse.json({ error: "ID do produto é obrigatório" }, { status: 400 });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedProduct) {
      return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
    }

    return NextResponse.json({ message: "Produto atualizado", product: updatedProduct });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Excluir um produto pelo ID
export async function DELETE(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const { id } = body; // Pega o ID do corpo da requisição

    if (!id) {
      return NextResponse.json({ error: "ID do produto é obrigatório" }, { status: 400 });
    }

    // Tenta remover o produto com o ID fornecido
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
    }

    return NextResponse.json({ message: "Produto excluído com sucesso", product: deletedProduct });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

