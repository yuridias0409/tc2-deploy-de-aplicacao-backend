module.exports = mongoose => {
    const Pessoa = mongoose.model(
        "pessoa",
        mongoose.Schema(
            {
                nome: String,
                idade: Number,
                foto: String,
            },
            { timestamps: true }
        )
    );
    return Pessoa;
};