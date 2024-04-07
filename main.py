def on_received_value(name, value):
    if name == "acc":
        pass
radio.on_received_value(on_received_value)

radio.set_group(69)
bitbot.select_model(BBModel.XL)