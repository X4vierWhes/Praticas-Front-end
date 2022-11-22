#include <iostream>

void criptografar(char*, int*);
void descriptografia(char*, const int*);
int sizeString(char*);

int main() {
	char texto[] = "FRONT";
	char text[] = "OLAVO";

	int* origNum0 = new int[sizeString(texto)]{};
	int* origNum1 = new int[sizeString(text)]{};

	std::cout << "Texto original: " << texto << std::endl;
	std::cout << "Texto criptografado: ";
	criptografar(texto, origNum0);

	std::cout << "Texto original: " << text << std::endl;
	std::cout << "Texto criptografado: ";
	criptografar(text, origNum1);

	delete [] origNum0;
	delete [] origNum1;
}

void criptografar(char* text, int* origNums) {
	int i{}, y{}, x{};
	//3x + 5;

	while (text[i]) {

		x = (int(text[i]) - 65) + 1;
		if (x > -1 && x < 30) {
			if (x < 27) {
				y = ((3 * x) + 5);
				origNums[i] = y;
				y = (y % 26) + 65;
				text[i] = char(y);
			}
		}
		i++;
	}

	std::cout << text << std::endl;
	descriptografia(text, origNums);


}

void descriptografia(char* text, const int* origNums) {
	int i{}, x{}, y{};
	//3x + 5;
	//inversa = (x-5)/3
	while (text[i]) {
		x = (int(text[i]) - 65) + 1;
		if (x > -1 && x < 30) {
			y = (((origNums[i] - 5) / 3) % 26) + 64;
			text[i] = char(y);
		}
		i++;
	}
	std::cout << "Texto descriptografado: " << text << std::endl;
}

int sizeString(char* text)
{
	int i{};
	while (text[i])
		i++;

	return i + 1;
}