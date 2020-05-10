#include <stdio.h>

int binsearch(int x, int v[], int n);

int main() {
    int s1[10];
    for (int i = 0; i < 10; ++i) {
        s1[i] = i;
    }

    int index = binsearch(3, s1, 9);
    printf("%d\n", index);

    return 0;
}

int binsearch(int x, int v[], int n) {
    int low, high, mid;
    low = 0;
    high = n - 1;
    mid = (low + high) / 2;

    while (low <= high && x != v[mid]) {
        if (x > v[mid])
            low = mid + 1;
        else
            high = mid - 1;
        mid = (low + high) / 2;
    }
    if (x == v[mid])
        return mid;
    return -1;
}
