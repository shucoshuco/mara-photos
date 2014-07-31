rt=$1
if [ $#  -ne  1 ]; then
    port=8000
fi

if [ $(uname -s) == "Darwin" ]; then
    open=open
else
    open=xdg-open
fi

cd src

$open http://localhost:$port && python -m SimpleHTTPServer $port; :q:
