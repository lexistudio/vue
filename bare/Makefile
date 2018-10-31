MODULES=index blocks buttons clearfix css3 display fn font forms height icons linear-gradient margin media mq normalize overflow padding position reset size text vendor width
SRC=$(addsuffix .styl,$(addprefix lib/,$(MODULES)))

doc: manual.asciidoc manual.html

manual.asciidoc: $(SRC)
	@cat $^ | sed 's/^\/\/ \?//' > $@

manual.html: manual.asciidoc
	@asciidoc $<
